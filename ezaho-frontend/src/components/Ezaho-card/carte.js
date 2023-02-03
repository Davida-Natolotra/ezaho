import { useSelector } from "react-redux";
import QRCode from "./qrcode";
import Viewer from "./viewer";

const qrCodeData = [
	{ id: 1234, value: "TEST1" },
	{ id: 1235, value: "TEST2" },
];
const qrCodeIds = qrCodeData.map((data) => data.id);

const Carte = () => {
	const PAX = useSelector((state) => state.PAX.PAX);
	console.log(PAX);
	return (
		<div>
			<div style={{ display: "none" }}>
				<QRCode valueString={String(PAX?.code || "")} documentID={1234} />
			</div>

			<Viewer
				id={1234}
				name={PAX?.name || ""}
				serial={PAX?.serial || ""}
				codeSexe={PAX?.codeSexe[0] || ""}
				code={PAX?.code || ""}
				codeRegion={PAX?.codeRegion || ""}
			/>
		</div>
	);
};

export default Carte;
