import ChevronDown from "../../assets/svg/chevronDown"
import Info from "../../assets/svg/info"

const styles = {
    textIcon: `flex items-center`
}

const CMCtableHeader = () => {
    return <tbody>
        <tr>
            <th></th>
            <th className="flex items-center">S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>7d %</th>
            <th><div className={styles.textIcon}><p className="mr-2">Market Cap</p> </div></th>
            <th><div className={styles.textIcon}><p className="mr-2">Volume(24h)</p></div></th>
            <th><div className={styles.textIcon}><p className="mr-2">Circulating Supply</p> </div></th>
            <th>Last 7 days</th>
        </tr>
    </tbody>
}

export default CMCtableHeader