interface FormInputProps {
    name: string,
    type: "password" | "text" | "date",
    placeholder: string,
    error: boolean
}

export default function FormInput(props: FormInputProps) {
    const inputName = props.name.replace(" ", "_").toLocaleLowerCase();
    let className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border-2 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ";
    if(props.error===true){
         className = "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border-2 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 border-red-500";
    }
    return (
        <>
            <label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{props.name}</label>
            <input id={props.name} type={props.type} placeholder={props.placeholder} name={inputName} className={className} />
        </>
    )
}