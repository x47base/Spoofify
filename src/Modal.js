import "./Modal.css";

export default function Modal({ title, description, button_text }) {
    return (
        <div className="modal h-screen flex justify-center items-center w-screen text-center">
            <div className="rounded-md bg-neutral-800 border-none border-r-2 p-4 flex flex-col justify-start items-center w-96 min-h-fit">
                <div className="mt-2">
                    <h3 className="font-semibold text-white text-2xl ">{title}</h3>
                    <span className="text-white font-normal mt-8">{description}</span>
                </div>
                <button className="modal-btn flex font-semibold rounded-md h-9 w-32 mt-4 justify-center items-center text-white text-center bg-green-500"><span>Close</span></button>
            </div>
        </div>
    );
};