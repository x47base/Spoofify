export default function Modal({ title, description, button_text }) {
    return (
        <div className="modal h-screen flex justify-center items-center w-screen z-50">
            <div className="rounded-md bg-neutral-800 border-none border-r-2 p-4 flex flex-col">
                <h3 className="font-semibold text-white text-2xl ">{title}</h3>
                <span className="text-white font-normal">{description}</span>
                <button className="modal-btn bg-red-500 rounded-md text-white mt-2">
                    <span className="text-white">{button_text}</span>
                </button>
            </div>
        </div>
    );
};