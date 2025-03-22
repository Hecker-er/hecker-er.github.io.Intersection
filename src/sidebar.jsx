export function SidebarButton({ title, setPage }) {
	return <button onClick={() => setPage(title)}>{title}</button>
};


export default function Sidebar({setPage}) {
	return (
	<>
		<div class="sidebar-buttons">
			<SidebarButton title="Devices" setPage={setPage} />
			<SidebarButton title="Traffick" setPage={setPage} />
			<SidebarButton title="DDOS" setPage={setPage} />
			<SidebarButton title="Drop" setPage={setPage} />
		</div>
	</>
	)
};
