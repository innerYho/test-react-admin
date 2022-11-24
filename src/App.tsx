import {
  Admin, Resource
  // , EditGuesser
} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';

import PostIcon from "@mui/icons-material/Book"
import UserIcon from "@mui/icons-material/Group"
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
// import localStorageDataProvider from 'ra-data-local-storage';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// import dataProvider from './dataProvider';
// 
// const dataProvider = localStorageDataProvider({
//   defaultData: {
//       posts: [
//           { id: 0, title: 'Hello, world!' },
//           { id: 1, title: 'FooBar' },
//       ],
//       comments: [
//           { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
//           { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
//       ],
//   }
// });

const App = () => (
  <Admin
    // authProvider={authProvider} 
    dataProvider={
      // simpleRestProvider('http://my.api.url/')
      dataProvider
    } dashboard={Dashboard}>
    {/* <Resource name="users" list={UserList} /> */}
    <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
    {/* <Resource name="posts" list={PostList} /> */}
    <Resource name="posts" list={PostList}
      edit={PostEdit} create={PostCreate} icon={PostIcon}
    // edit={EditGuesser}
    />
  </Admin>
)
export default App
