


const Story = ({ avatar, username }) => {
    return (
        <div className="flex flex-col justify-cente  items-center px-2 w-20 h-20 cursor-pointer">
            <img className="rounded-full p-[1.5px] border-red-500 border-2 overflow-x-scroll w-[60px] h-[60px] " src={avatar} alt="avatar" />
            <p className="truncate w-[60px] text-xs">{username} </p>
        </div>
    );
}

export default Story; 