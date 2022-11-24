import { List, Datagrid, TextField, ReferenceField, SimpleForm, Create, EditButton, Edit, ReferenceInput, TextInput } from "react-admin"
import { useRecordContext } from "react-admin"

const PostFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />
]

export const PostList = () => (
    <List filters={PostFilters}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
)

export const PostTitle = () => {
    const record = useRecordContext()
    return <span>
        Post {record ? `"${record.title}"` : ''}
    </span>
}

export const PostEdit = () => (
    //     <Edit>
    // <SimpleForm>
    //    <TextInput source="id" disabled />
    //    <ReferenceInput source="userId" reference="users" />
    //    <TextInput source="title" />
    //    <TextInput source="body" multiline rows={5} />
    // </SimpleForm> 
    // </Edit>
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
)

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
)

