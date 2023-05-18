import React from 'react'
import { useForm } from 'react-hook-form'

function ContactForm(props) {
    const { register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className={`${props.isDarkMode ? "card_light" : "card_dark"} p-4 rounded-3 `}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <input type='text' className={`form-control p-3 form-input  ${props.isDarkMode ? 'border_dark' : 'border_light'} ${props.isDarkMode ? "text-dark" : "text-light"}`} placeholder="Your Name" {...register("name", { required: true })} />
                    <error style={{ fontSize: "14px", color: "#FB5343" }}>
                        {errors.name?.type === "required" && "Name is required * "}
                    </error>
                </div>
                <div className="mb-3">
                    <input type='number'className={`form-control p-3 form-input  ${props.isDarkMode ? 'border_dark' : 'border_light'} ${props.isDarkMode ? "text-dark" : "text-light"}`} placeholder="Phone Number"
                        {...register("number", { minLength: 6, maxLength: 12 })} />
                    <error style={{ fontSize: "14px", color: "#FB5343"}}>
                        {errors.number?.type === "minLength" && "Entered number is less than 6 digits"}
                        {errors.number?.type === "maxLength" && "Entered number is greater than 6 digits"}
                    </error>
                </div>
                <div className="mb-3 ">
                    <input  className={`form-control p-3 form-input  ${props.isDarkMode ? 'border_dark' : 'border_light'}  ${props.isDarkMode ? "text-dark" : "text-light"}`} placeholder="Your Email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} />
                    <error style={{ fontSize: "14px", color: "#FB5343" }}>
                        {errors.email?.type === "required" && "Email is required * "}
                        {errors.email?.type === "pattern" && "Entered @email.com is in  "}
                    </error>
                </div>
                <div className="mb-3">
                    <input type="text" className={`form-control p-3 form-input  ${props.isDarkMode ? 'border_dark' : 'border_light'} ${props.isDarkMode ? "text-dark" : "text-light"}`} placeholder="Your Subject" />
                </div>
                <div className="mb-3">
                    <textarea className={`form-control p-3 form-input  ${props.isDarkMode ? 'border_dark' : 'border_light'} ${props.isDarkMode ? "text-dark" : "text-light"}`} placeholder='Your Message' rows="6" style={{ resize: "none" }}></textarea>
                </div>

                <button type='submit' className="btn-clr text-white">Submit Now</button>
            </form>
        </div>
    )
}

export default ContactForm