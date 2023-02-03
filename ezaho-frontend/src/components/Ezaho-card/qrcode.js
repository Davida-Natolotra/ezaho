import { QRCodeCanvas } from "qrcode.react";

const QRGenerator = ({ valueString, documentID }) => {
	return (
		<div>
			<QRCodeCanvas
				id={documentID}
				value={valueString}
				size={256}
				bgColor="#fff"
				fgColor="#000"
				level="H"
				includeMargin={true}
			/>
		</div>
	);
};

export default QRGenerator;
