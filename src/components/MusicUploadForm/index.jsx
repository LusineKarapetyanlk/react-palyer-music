
import { useFormik } from 'formik';
import icon from "/download.png";
import "./MusicUploadForm.scss";


const MusicUploadForm = ({ setSongData, songData }) => {

  const formik = useFormik({
    initialValues: {
      name: "",
      artist: "",
      trackNumber: 0,
      file: null,
    },
    validate: (values) => {
      const errors = {};

      if (!values.file) {
        errors.file = 'Please, select a valid MP3 or WAV file.';
      }
      if (values.file && !values.name) {
          errors.inputs = 'Please fill in all information when uploading a file.';
      }
      //we can add  additional validation here
      return errors;
    },
    // we can use it with API
    // onSubmit: async (values, { setSubmitting }) => {
    // console.log(values);  
    //   try {
    //     const response = await axios.post(URL, values);
    //     console.log('Form submission successful:', response.data);
    //   } catch (error) {
    //     console.error('Form submission failed:', error.message);
    //   }

    //   setSubmitting(false);
    // },
    onSubmit:(values, { setSubmitting })=>{
      console.log('Form values submitted:', values);
      // we can check if there are any errors 
      if (Object.keys(formik.errors).length === 0) {
        //submit logic
        setSongData([...songData,{
          artist:values.artist,
          file:values.file.name,
          name:values.name,
          trackNumber:values.trackNumber
        }])
        console.log('No validation errors, proceed with submission');
      } else {
        console.log('Validation errors');
      }
      formik.resetForm();
      setSubmitting(false);
    },
    
    
    });

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && (file.type === 'audio/mpeg' || file.type === 'audio/wav')) {
      formik.setFieldValue('file', file);
    } else {
      formik.setFieldValue('file', null);
      formik.setFieldError('file', 'Please select a valid MP3 or WAV file.');
      event.target.value = null;
    }
  };

  return (
    <div className="MusicUploadForm_wrapper">
      <p className="MusicUploadForm_title"> You can Upload your music here</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="MusicUploadForm_top">
          <label
            id="MusicUploadForm_label"
            className={formik.values.file ? "MusicUploadForm_label" : ""}
            htmlFor="MusicUploadForm_input"
          >
            {formik.values.file?.name || "Upload Music"}
          </label>
          <input
            id="MusicUploadForm_input"
            name="file"
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className={formik.values.file ? "Submit_btn" : ""}
          >
            <img src={icon} width={20} alt="Upload Icon" />
          </button>
        </div>
        {formik.errors.file && <div className="error-message">{formik.errors.file}</div>}
        {formik.errors.inputs && <div className="error-message">{formik.errors.inputs}</div>}
        {formik.values.file ? (
         <div className="MusicUploadForm">
         <div className="songrow_column Upload_label">
           <label>Name</label>
           <input
             placeholder={formik.values.file.name ? formik.values.file.name : ""}
             type="text"
             name="name"
             value={formik.values.name}
             onChange={formik.handleChange}
           />
         </div>
         <div className="songrow_column Upload_label">
           <label> Artist </label>
           <input
             type="text"
             name="artist"
             value={formik.values.artist}
             onChange={formik.handleChange}
           />
         </div>
         <div className="songrow_column Upload_label">
           <label>Track</label>
           <input
             type="number"
             name="trackNumber"
             value={formik.values.trackNumber}
             onChange={formik.handleChange}
           />
         </div>
       </div>
        ) : (
          ""
        )}
       
      </form>
    </div>
  );
};

export default MusicUploadForm;
