import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { cuisineList } from "@/config/restaurant-options-config"
import { useFormContext } from "react-hook-form"
import CuisineCheckbox from "./CuisineCheckbox"

const CuisinesSection = () => {
    //control function link form field to form
    const {control} = useFormContext();
    return (
        <div className="space-y-2">
            <div>
                <h2 className="text 2-xl font-bold">Cuisines</h2>
                <FormDescription>
                    Select the cuisines that your restaurant serves
                </FormDescription>
            </div>
            <FormField control = {control} 
            name = "cuisines"
             render = {({field}) =>(
                //form item will help in showing error message of nothing selected also saves the indivisual selection
                <FormItem>
                    <div className="grid md:grid-cols-5 gap-1">
                        {cuisineList.map((cuisineItem) =>(
                            <CuisineCheckbox key={cuisineItem.id} cuisine = {cuisineItem.label} field = {field}/>
                        ))}
                    </div>
                        <FormMessage/>
                </FormItem>
            )}/>
        </div>
    )
}

export default CuisinesSection
