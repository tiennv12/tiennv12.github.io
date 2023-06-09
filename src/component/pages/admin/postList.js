import * as React from 'react';
import { Children, Fragment, cloneElement, memo } from 'react';
import BookIcon from '@mui/icons-material/Book';
import Chip from '@mui/material/Chip';
import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import lodashGet from 'lodash/get';
import jsonExport from 'jsonexport/dist';
import {
    BulkDeleteButton,
    BulkExportButton,
    Datagrid,
    DateField,
    downloadCSV,
    EditButton,
    Filter,
    List,
    SearchInput,
    ShowButton,
    TextField,
    useTranslate,
    TextInput,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import ResetViewsButton from './ResetViewsButton';
export const PostIcon = BookIcon;

const useQuickFilterStyles = makeStyles((theme) => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));
const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="title[like]" alwaysOn />
        
    </Filter>
);

const exporter = (posts) => {
    const data = posts.map((post) => ({
        ...post,
        backlinks: lodashGet(post, 'backlinks', []).map((backlink) => backlink.url),
    }));
    jsonExport(data, (err, csv) => downloadCSV(csv, 'posts'));
};

const useStyles = makeStyles((theme) => ({
    title: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    hiddenOnSmallScreens: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    publishedAt: { fontStyle: 'italic' },
}));

const PostListBulkActions = memo((props) => (
    <Fragment>
        <ResetViewsButton {...props} />
        <BulkDeleteButton {...props} />
        <BulkExportButton {...props} />
    </Fragment>
));

const usePostListActionToolbarStyles = makeStyles({
    toolbar: {
        alignItems: 'center',
        display: 'flex',
        marginTop: -1,
        marginBottom: -1,
    },
});

const PostListActionToolbar = ({ children, ...props }) => {
    const classes = usePostListActionToolbarStyles();
    return <div className={classes.toolbar}>{Children.map(children, (button) => cloneElement(button, props))}</div>;
};

const rowClick = (id, basePath, record) => {
    if (record.commentable) {
        return 'edit';
    }

    return 'show';
};

const PostPanel = ({ id, record, resource }) => <div dangerouslySetInnerHTML={{ __html: record.body }} />;

const PostList = (props) => {
    const classes = useStyles();

    return (
        <List
            {...props}
            bulkActionButtons={<PostListBulkActions />}
            filters={<PostFilter/>}
            
            exporter={exporter}
        >
            <Datagrid rowClick={rowClick} expand={PostPanel} optimized>
                <TextField source="id" />
                <TextField source="title" cellClassName={classes.title} />
                <TextField source="price" />
                <TextField source="description" />
                <TextField source="image" />
                <TextField source="to" />

                <PostListActionToolbar>
                    <EditButton />
                    <ShowButton />
                </PostListActionToolbar>
            </Datagrid>
        </List>
    );
};

const tagSort = { field: 'name', order: 'ASC' };

export default PostList;
