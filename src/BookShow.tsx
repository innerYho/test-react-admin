// import { useParams } from 'react-router-dom';
// import {
//   useGetOne,
//   useRedirect,
//   RecordContextProvider,
//   SimpleShowLayout,
//   Title,
//   Labeled,
//   TextField,
//   DateField,
// } from 'react-admin';
// import { Card } from '@mui/material';

// const BookShow = () => {
//   const { id } = useParams();
//   const redirect = useRedirect();
//   const { data, isLoading } = useGetOne(
//     'books',
//     { id },
//     { onError: () => redirect('/books') }
//   );
//   if (isLoading) {
//     return <Loading />;
//   }
//   return (
//     <RecordContextProvider value={data}>
//       <div>
//         <Title title="Book Show" />
//         <Card>
//           <SimpleShowLayout>
//             <Labeled label="Title">
//               - <TextField source="title" record={data} />
//               + <TextField source="title" />
//             </Labeled>
//             <Labeled label="Publication Date">
//               - <DateField source="published_at" record={data} />
//               + <DateField source="published_at" />
//             </Labeled>
//           </SimpleShowLayout>
//         </Card>
//       </div>
//     </RecordContextProvider>
//   );
// };
