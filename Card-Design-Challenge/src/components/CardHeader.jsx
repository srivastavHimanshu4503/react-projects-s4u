import personImage from "../assets/person-img.png"

const CardHeader = () => {
    return (
        <div className="bg-[#4071F4] w-full relative h-25 flex justify-center">
            <img
                src={personImage}
                className="size-25 absolute translate-y-1/4 rounded-full p-0.5 bg-white border-3 border-[#4071F4]"
                alt="person-icon"
            />
        </div>
    );
}

export default CardHeader;
