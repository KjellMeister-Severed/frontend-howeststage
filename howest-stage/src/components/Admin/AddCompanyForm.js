import { Component } from "react";

class AddCompanyForm extends Component {
    render() {
        return (
            <>
                <h1 className="font-vagbold text-xl mt-2">Add company</h1>
                <form className="flex flex-col w-3/4">
                    <label htmlFor="name">Company name</label>
                    <input type="text" name="name" id="name" className="border-solid 
                    border-2 mb-3"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border-solid 
                    border-2 mb-3"/>

                    <label htmlFor="phonenumber">Phone number</label>
                    <input type="text" name="phonenumber" id="phonenumber" className="border-solid 
                    border-2 mb-3"/>

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" className="border-solid 
                    border-2 mb-3"/>

                    <label htmlFor="postalcode">Postal code</label>
                    <input type="text" name="postalcode" id="postalcode" className="border-solid 
                    border-2 mb-3"/>

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="border-solid 
                    border-2 mb-3"/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" className="border-solid 
                    border-2 mb-3 h-44"/>

                    <label htmlFor="lookingfor">Looking for</label>
                    <textarea name="lookingfor" id="lookingfor" className="border-solid 
                    border-2 mb-3 h-44"/>

                    <input type="submit" value="Create company" className="block rounded bg-magenta mt-3 mb-3 text-white ml-auto mr-auto"/>
                    <p className="text-green text-center">Company added.</p>
                </form>
            </>
        )
    }
}

export default AddCompanyForm
