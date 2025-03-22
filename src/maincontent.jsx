import DevicesPage from './devices.jsx'
import TraffickPage from './traffic.jsx'
import DDOSPage from './ddos.jsx'
import DropPage from './drop.jsx'

export default function MainContent({content}) {
	// content = "Devices" | "Traffic" | "DDOS" | "Drop"

	if (content == "Devices") {
		return (
			<DevicesPage />
		)
	}
	if (content == "Traffic") {
		return (
			<TrafficPage />
		)
	}
	if (content == "DDOS") {
		return (
			<DDOSPage />
		)
	}
	if (content == "Drop") {
		return (
			<DropPage />
		)
	}

	return <p>{content}</p>
}
