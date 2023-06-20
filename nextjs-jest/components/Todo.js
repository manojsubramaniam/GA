import React, { useState }from 'react';
import styles from "../styles/Home.module.css";

const Todo = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const add = () => {
        setResult(num1 + num2);
    }


    return ( <>
        <div className={styles.mainDiv}>
            {/* <h3>Calculator</h3> */}
            <div className={styles.result} data-testid="result">
                {result}
            </div>
            <input
                type="number"
                className={styles.input}
                data-testid="num1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                className={styles.input}
                data-testid="num2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            /><br />
            <button className={styles.button} onClick={add} data-testid="add">Add</button>
        </div>
    </> );
}

export default Todo;