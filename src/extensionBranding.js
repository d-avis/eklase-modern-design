const applyExtensionBranding = () => {
	// Change favicon
	if (document.querySelector(`link[rel~="icon"]`) === null) {
		document.head.innerHTML += `<link rel="icon" href="${favicon}" />`;
	} else {
		document.querySelector(`link[rel~="icon"]`).href = favicon;
	}

	// Edit the bottom copyright text
	if (document.querySelector(`.copyright`) !== null) {
		if (document.location.pathname === `/`) {
			document.querySelector(`.copyright`).innerHTML = `SIA “Izglītības sistēmas” 2004-${new Date().getFullYear()}`;
		} else {
			document.querySelector(`.copyright`).innerHTML = 
				`SIA “Izglītības sistēmas” 2004-${new Date().getFullYear()}
				<br />
				Aktivizēts <i>E-klases Modernais Dizains</i>`;
		}
	}
}

const favicon = `data:image/png;base64,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bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjBhMmQyYjQyLTBmODMtNGRlZS05YzY1LWJlNWI2NGUwM2QwMyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNjI0MDFjOS0zYzE1LTQxN2ItYjBhNC04Zjk3NTFhOGYzNWIiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZTVkY2YxNC02Y2M1LTQ4MGYtOTNiNC01Yzc1NGQ1YTdjMzgiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE2Mjg0Mzc2NDQ0MTc5MDgiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yNCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzdkNTM2OS00ZTgzLTQ2MmMtODhlOC1kMDhkNmQ0ZWQ2M2MiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDIxLTA4LTA4VDExOjQxOjI3KzAzOjAwIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0NWNlOTk1LTc2ZWQtNGVjYi1iYjVhLWU5ODNiNTI5MjU0ZiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjEtMDgtMDhUMTI6MTc6MjIrMDM6MDAiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWFjYjRlYmMtMDE0MC00Mzk4LTk2YzctYWU3ZmIxYmNjMDgxIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0wOC0wOFQxODo0NzoyNCswMzowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4dAwmWAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4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`;