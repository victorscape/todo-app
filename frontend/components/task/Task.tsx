export default function Task({id, task}: {id: string, task: string}) {
    return (
        <div className="mb-4">
            <label className="flex items-center justify-start">
                <input type="checkbox" id={id} className="mr-4 h-6 w-6"/>
                <p className="text-xl">{task}</p>
            </label>
        </div>
    );
}