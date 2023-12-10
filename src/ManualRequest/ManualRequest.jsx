import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';

// async function sendReq() {
//   const setResponse = await fetch("http://localhost:8080/member/", {
//   method: 'GET',
//   body: request
// })
//   console.log(response)
// }

function useAsyncHook(query) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState("false");

  React.useEffect(() => {
    async function fetchBookList() {
      try {
        setLoading("true");
        const response = await fetch(
          `http://localhost:8080/member/${query}`,
          // {credentials: "include"}
          {mode: 'no-cors'}
        );

        const json = await response.json();
        // console.log(json);
        setResult(
          json.items.map(item => {
            console.log(item.volumeInfo.title);
            return item.volumeInfo.title;
          })
        );
      } catch (error) {
        setLoading("null");
      }
    }

    if (query !== "") {
      fetchBookList();
    }
  }, [query]);

  return [result, loading];
}


export default function ManualRequest() {
  
  const [request, setRequest] = React.useState("")
  // const [reply, setReply] = React.useState()
  const [query, setQuery] = React.useState("")
  const [reply, loading] = useAsyncHook(query)

  const handleSubmit = (event)=> {
    event.preventDefault();
    // alert('A request was submitted '+ request)
    setQuery(request)
  }

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard" 
          value={request}
          onChange={(event) => {
            setRequest(event.target.value)
          }}/>
        <br />
        <Button variant='contained' type='submit'>Submit</Button>
        <br />
      </Box>
      <Box>
      {loading === "false" ? (
        <h1>Search for Books</h1>
      ) : loading === "null" ? (
        <h1>No Book Found</h1>
      ) : (<TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={reply} />)}

      </Box>
    </Container>
  );
}



// export default function App() {
//   const [state, setState] = useState({
//     email: "",
//     password: ""
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setState((prevProps) => ({
//       ...prevProps,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(state);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={state.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={state.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label></label>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }