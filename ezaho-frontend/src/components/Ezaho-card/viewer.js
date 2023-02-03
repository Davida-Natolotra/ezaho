import React, { useState, useEffect } from "react";
import {
	Document,
	Page,
	Image,
	StyleSheet,
	Font,
	Text,
	PDFViewer,
	View,
} from "@react-pdf/renderer";
import CarteBG from "./Carte-Ezaho.png";

function Viewer({ id, name, serial, codeSexe, code, codeRegion }) {
	const [dataUrl, setDataUrl] = useState(
		document.getElementById(id)?.toDataURL()
	);
	useEffect(() => {
		setDataUrl(document.getElementById(id).toDataURL());
	}, [code]);

	const codeEzaho = code.substring(2, 10);

	return (
		<PDFViewer width="100%" height="400vh">
			<Document>
				<Page size="B7" orientation="landscape">
					<Image style={styles.background} src={CarteBG} fixed />
					<Image allowDangerousPaths src={dataUrl} style={styles.QRImage} />
					<Text style={styles.series}>{serial}</Text>
					<Text style={styles.user}>{name}</Text>
					<Text style={styles.codeSexe}>{codeSexe}</Text>
					<Text style={styles.code}>{codeEzaho}</Text>
					<Text style={styles.codeRegion}>{codeRegion}</Text>
				</Page>
			</Document>
		</PDFViewer>
	);
}

Font.register({
	family: "Noto-Sans",
	src: "https://fontsfree.net//wp-content/fonts/basic/sans-serif/FontsFree-Net-NotoSans-Bold.ttf",
});
Font.register({
	family: "Oswald",
	src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
Font.register({
	family: "Myriad",
	src: "https://www.wfonts.com/download/data/2016/06/13/myriad-pro/MyriadPro-Bold.otf",
});

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	background: {
		position: "absolute",
		width: "100%",
		height: "auto",
		zIndex: -2,
	},
	sidebar: {
		position: "absolute",
		left: "0px",
		top: "0px",
		// transformOrigin: "60% 60% 0px",
		width: "169px",
		height: "842px",
		zIndex: 1,
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "Times-Roman",
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "Oswald",
	},
	user: {
		fontSize: 12,
		textAlign: "left",
		fontFamily: "Noto-Sans",
		top: 72,
		left: 80,
	},
	series: {
		fontSize: 12,
		textAlign: "left",
		fontFamily: "Oswald",
		color: "#fff",
		top: 39,
		left: 270,
	},
	codeSexe: {
		fontSize: 18,
		textAlign: "left",
		fontFamily: "Noto-Sans",
		color: "#000",
		top: 118,
		left: 32,
		position: "absolute",
	},
	code: {
		fontSize: 18,
		textAlign: "left",
		fontFamily: "Noto-Sans",
		color: "#000",
		top: 118,
		left: 110,
		position: "absolute",
		letterSpacing: 3,
	},
	codeRegion: {
		fontSize: 18,
		textAlign: "left",
		fontFamily: "Noto-Sans",
		color: "#fff",
		top: 118,
		left: 300,
		position: "absolute",
	},
	author: {
		fontSize: 12,
		textAlign: "center",
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: "Oswald",
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
	},
	QRImage: {
		position: "absolute",
		left: "280px",
		top: "159px",

		width: "54px",
		height: "auto",
		zIndex: 0,
	},
});
export default Viewer;
