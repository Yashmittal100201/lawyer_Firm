import React,{useState} from 'react'
import './Lawyers.css'
import Lawyer from './Lawyer';
import { useSelector} from 'react-redux';
import { TableRow, TableCell, Table, TableBody, TableContainer, TableHead, Paper, Container,TextField,Button } from "@mui/material";

const Lawyers = ()=>{

    const [jsonData1,setJsonData1] = useState(useSelector((state )=> state.changeTheValue)[0].lawyers);
    const [jsonData, setJsonData] = useState(jsonData1);
    const [name,setName] = useState("");
    const [speciality,setSpeciality] = useState("");

    const tableFilterHandeler = (e)=>{
        setName(e.target.value);
        let allLawyers =[]
        if(name!=="" && speciality==="")
        {
            console.log(jsonData1)
            allLawyers = jsonData1.filter((lawyer)=>{
                    return (
                    lawyer.name.includes(name)
                );
            })
        }
        else if(name==="" && speciality!=="")
        {
            allLawyers = jsonData1.filter((lawyer)=>{
                return (
                    lawyer.speciality.includes(speciality)
                );
            })
        }
        else if(name!=="" && speciality!=="")
        {
            allLawyers = jsonData1.filter((lawyer)=>{
                return (
                    lawyer.speciality.includes(name) && lawyer.name.inclueds(name)
                );
            })
        }
        setJsonData(allLawyers);
        // setName("");
        // setSpeciality("");
    }
    return (

            <Container maxWidth="lg" >
                <br/>
                <br/>
                <h2 className='heading'>Registered Lawyers</h2>
                
                <div className='filterContainer'>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <TextField id="standard-basic"  label="Name" variant="standard" value={name} onChange={(e)=>{ tableFilterHandeler(e)}} className='input'/>
                        <TextField id="standard-basic" label="Speciality" variant="standard" value={speciality} onChange={(e)=>{setSpeciality(e.target.value);tableFilterHandeler()}} className='input'/> 
                        <Button className='bttn' sx={{ m: 2 }} onClick={tableFilterHandeler} variant='contained'>Filter</Button>
                    </form>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Speciality</TableCell>
                            <TableCell align="right">Phone no.</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                jsonData.map((lawyer,i)=>{
                                    return (
                                    <Lawyer key={i} details={lawyer}/>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
    );
}

export default Lawyers;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// export default function InputAdornments() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }}>
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             label="Amount"
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="filled-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="filled"
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
//           <FilledInput
//             id="filled-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="filled-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
//           <FilledInput
//             id="filled-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="standard"
//         />
//         <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
//           <Input
//             id="standard-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//           <Input
//             id="standard-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//     </Box>
//   );
// }
