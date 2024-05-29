import { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/Form.css"
import { useDispatch } from "react-redux";
import { createSera } from "../../Redux/Actions/ActionSera";
import { TadySera } from "../../Redux/Actions/ActionTadySera";


function Form({name  ,Button}) {
    
    const dispatch = useDispatch();
    const {register , handleSubmit ,reset} = useForm();
  
    const [image , setImage] = useState();
    
    const AddData = (data)=>{
         const newData = {...data , image : image}
         Button === "Asera" ? dispatch(createSera(newData))  : dispatch(TadySera(newData))
         reset();
    }
  return (
    <div>
        <div className="container">
        
            <form className="htmlForm" onSubmit={handleSubmit(AddData)}  encType="multipart/htmlForm-data">
            
                <h2>{name}</h2>   
             
                <div className="form-group">
                    <label htmlFor="nameSera" >Anaran'ny Sera</label>
                    <input type="text"  {...register('nameSera')} />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Findaynao</label>
                    <input type="text"  {...register('contact')} required />
                </div>
                <div className="form-group">
                    <label htmlFor="nameFacebook">Anaranao ao amin'ny Facebook</label>
                    <input type="text" {...register('nameFacebook')} required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Sarany</label>
                    <input type="number" {...register('price')} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mombamomba ny sera</label>
                    <textarea id="description"  {...register('description')} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Sokajy</label>
                    <select id="category"  {...register('category')} required>
                        <option value="">Categories</option>
                        <option value="technologie">Technologie</option>
                        <option value="vetement">Vetement </option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Sarin'ilay Sera</label>
                    <input filename={image}  onChange={e => setImage(e.target.files[0])}  type="file" accept="image/*"></input>
                </div>

                <button type="submit">{Button}</button>
        
            </form>
    </div>
</div>
  )
}

export default Form

