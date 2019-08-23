export const selectRecording = (recording) => {
	consol.log("You clicked on recording: ", recording.id);
	return {
		type: "RECORDING_SELECTED",
		//data
		payload: recording
	}
};