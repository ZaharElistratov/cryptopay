const Icon = ({id, className, width, height,}) => {
    return (
        <svg className={className} width={width} height={height}>
            <use href={`/img/icons.svg#${id}`}/>
        </svg>
    );
};

export default Icon;