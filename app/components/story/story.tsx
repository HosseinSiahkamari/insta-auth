


const Story = ({ avatar, username }) => {
    return (
        <div className="flex flex-col justify-cente  items-center px-2 w-20 h-20 cursor-pointer">
            <img className="rounded-full p-[1.5px] border-red-500 border-2 overflow-x-scroll w-14 h-14 " src={avatar} alt="avatar" />
            <p className="truncate w-14 ">{username} </p>
        </div>
        );
}

export default Story;