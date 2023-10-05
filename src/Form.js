import './Form.css';

const FormModal = ({ title, content }) => {
    return (
        <div className="modal fixed z-40 h-screen flex justify-center items-center w-screen text-center">
            <div className="rounded-md bg-neutral-800 border-none border-r-2 p-4 flex flex-col justify-start items-center w-96 min-h-fit">
                <div className="mt-2 text-white">
                    <h3 className="font-semibold text-white text-2xl ">{title}</h3>
                    {content}
                </div>
                </div>
        </div>
    );
}

export default function Form({ title, inputs, submit_text }){
    return (
        <div>
            <FormModal title={title} button_text={submit_text} content={<div>
                <form id={title.replace(/\s/g, '')} className="mt-4 flex flex-col justify-center items-center">
                    {inputs.map((item, index) => {
                        return (
                            <div>
                                <input type={item.type} id={item.name} name={item.name} placeholder={item.placeholder} className="text-black rounded-sm text-center w-72 mb-2"/><br/>
                            </div>
                        );
                    })}
                    <button type="submit" className="modal-btn flex font-semibold rounded-md h-9 w-32 mt-4 justify-center items-center text-white text-center bg-green-500"><span>{submit_text}</span></button>
                </form>
            </div>} />
        </div>
    );
};
