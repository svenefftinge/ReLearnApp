// Action Creator
export const addRecording = (recording) => {
    console.log("You added a recording: ", recording.id);
    // The Action being returned
    return {
        type: "RECORDING_ADDED",
        payload: recording
    }
};
