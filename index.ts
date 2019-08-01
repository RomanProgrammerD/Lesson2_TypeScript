interface IApp{
	tasks: Array<ITask>;
	addTask(t: Task): void;
	completedTasks(): void;
	getWorkers();
	getTasks();
}

interface ITask{
	title: string;
	workers: Array<IWorker>;
	estimate_time: number;
	consumed_time: number;
	completed: boolean;
	logs: Array<ILog>;
	setTitle(t: string): void;
	setEstimateTime(et: number): void;
	setConsumedTime(ct: number): void;
	setCompleted(comp: boolean): void;
	getTitle();
	getEstimateTime();
	getConsumedTime();
	getCompleted();
	addWorker(w: Worker_): void;
}

interface IWorker{
	name: string;
	getName();
	setName(n: string): void;
}

interface ILog{
	title: string;
	description: string;
	setTitle(t: string): void;
	setDescription(d: string): void;
	getTitle();
	getDescription(): void;
}

class Log implements ILog{
	title: string;
	description: string;

	constructor(t: string, d: string)
	{
		this.title = t;
		this. description = d;
	}
	setDescription(d: string)
	{
		this.description = d;
	}
	setTitle(t: string)
	{
		this.title = t;
	}
	getTitle()
	{
		return this.title;
	}
	getDescription()
	{
		return this.description;
	}
}

class Task implements ITask{
	title: string;
	workers: Array<IWorker> = [];
	estimate_time: number;
	consumed_time: number;
	completed: boolean;
	logs: Array<ILog> = [];

	constructor(t: string,et:number, ct: number, comp:boolean)
	{
		this.title = t;
		this.estimate_time = et;
		this.consumed_time = ct;
		this.completed = comp;
	}

	setTitle(t: string)
	{
		this.title = t;
	}
	setEstimateTime(et: number)
	{
		this.estimate_time = et;
	}
	setCompleted(comp: boolean)
	{
		this.completed = comp;
	}
	setConsumedTime(ct: number)
	{
		this.consumed_time = ct;
	}
	getTitle()
	{
		return this.title;
	}
	getEstimateTime()
	{
		return this.estimate_time;
	}
	getConsumedTime()
	{
		return this.consumed_time;
	}
	getCompleted()
	{
		return this.completed;
	}
	addWorker(w:Worker_)
	{
		this.workers.push(w);
	}
	addLog(l:Log)
	{
		this.logs.push(l);
	}
	
}

class Worker_ implements IWorker{
	name: string;
	constructor(n: string)
	{
		this.name = n;
	}
	setName(n: string)
	{
		this.name = n;
	}
	getName(){
		return this.name;
	}
}

class App implements IApp{
	tasks: Array<ITask> = [];
	constructor(){}
	addTask(t: Task)
	{
		this.tasks.push(t);
	}
	completedTasks()
	{
		this.tasks.forEach(
			(item, i, arr)=>{
				if(item.completed === true)
				{
					console.log(item);
				}
			}
		);
	}
	getWorkers()
	{
		let worker = [];
		this.tasks.forEach((item, i, arr) =>{
			item.workers.forEach((item_, i_, arr) => {
				worker.push(item_);
			});
		});
		return worker;
	}
	getTasks()
	{
		let task = [];
		this.tasks.forEach((item, i, arr) => {
			task.push(item);
		});
		return task;
	}
}
