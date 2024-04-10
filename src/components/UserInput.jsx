export default function UserInput({investmentsValues, handleChange}){
    console.log("hello user input");
    const {initialInvestment, annualInvestment, expectedReturn, duration} = investmentsValues

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment </label>
                    <input type="number" name='initialInvestment' required value={initialInvestment} onChange={handleChange}/>
                </p>

                <p>
                    <label>Annual Investment </label>
                    <input type="number" name='annualInvestment' required value={annualInvestment} onChange={handleChange}/>               
                </p>
            </div>

            <br/>

            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" name='expectedReturn' required value={expectedReturn} onChange={handleChange}/>
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" name='duration' required value={duration} onChange={handleChange}/>
                </p>
            </div>
        </section>
    )
}