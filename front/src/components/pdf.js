import {React, useState} from 'react';

const Pdf = () =>{
const [pdfFile, setPdfFile] = useState(null);
const [pdfFileError, setpdfFileError] = useState('');
const [viewPdf, setViewPdf]= useState(null);
const fileType = ['application/pdf'];
const handlePdfFileChange = (e) => {
	let SelectedFile = e.target.files[0];
	if(SelectedFile){
      if(SelectedFile&&fileType.includes(SelectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(SelectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setpdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setpdfFileError('Please select valid pdf file');
      }
    }
    else{
      console.log('select your file');
    }
}
const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }

return (
	<div className="container">
	<form onSubmit = {handlePdfFileSubmit}>
		<div className= "row">
	<input type = "file"
		required onChange= {handlePdfFileChange}/>
	<br></br>
	<button type="submit"
		className="button-primary">Subir</button>
	</div>
	</form>	
	</div>
);
} 

export default Pdf;
