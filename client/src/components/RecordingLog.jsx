function RecordingLog({ recordedData }) {

    return (
        <div>
            <h2 className="mb-3">Recording Log</h2>
            {recordedData.length > 0 ? (
                recordedData.map((record, index) => (
                    <p key={index} className="mb-1 font-monospace small">
                        {record}
                    </p>
                ))
            ) : (
                <p>Waiting for recording to start...</p>
            )}
        </div>
    );
}

export default RecordingLog