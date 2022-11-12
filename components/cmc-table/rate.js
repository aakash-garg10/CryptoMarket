import ChevronDown from "../../assets/svg/chevronDown"
import ChevronUp from "../../assets/svg/chevronUp"

const styles = {
    rate: `rate flex items-center`,
    red: `ml-2 text-[#EA3943]`,
    green: `ml-2 text-[#17C784]`
    // red: `ml-2 `,
    // green: `ml-2 `
}

const Rate = ({ isIncrement, rate }) => {
    console.log(isIncrement)
    console.log(rate)
    return <div className={styles.rate}>
        {(rate>0) ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943" />}
        {/* <p className={(rate>0) ? styles.green : styles.red}>{rate}%</p> */}
        <p className={(rate>0) ? styles.green : styles.red}>{rate>0 ? rate: (rate=-rate)}%</p>
    </div>
}

export default Rate