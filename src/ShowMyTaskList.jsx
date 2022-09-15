/* eslint-disable react/prop-types */

const ShowMyTaskList = ({datos, setDatos}) => {

return (
    <>
        {datos === "" ? <h4>No tasks</h4> : datos.datos}
    </>
);
};



export default ShowMyTaskList;
