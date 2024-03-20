
const Link = ({route}) => {
    return (
        <div className="mr-6 hover:bg-orange-400 hover:rounded-lg p-2">
            <a href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;