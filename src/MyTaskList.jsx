
import ShowMyTaskList from "./ShowMyTaskList";

// import PropTypes from 'prop-types';
const myTaskList = ({datos, setDatos}) => {

    

    const handleAdd = (e) => {
        setDatos([e.preventdefault, ...datos])
    }

return (
    <>
        <div className="container">
            <input type="text" />
            <button onClick={handleAdd}>Add</button><br/>
        </div>
        <h3>TaskList</h3>
        {datos ? <ShowMyTaskList datos={datos} setDatos={setDatos}/>: null}
    </>
);
};

export default myTaskList;
