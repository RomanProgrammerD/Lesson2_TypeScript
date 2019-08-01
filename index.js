var Log = /** @class */ (function () {
    function Log(t, d) {
        this.title = t;
        this.description = d;
    }
    Log.prototype.setDescription = function (d) {
        this.description = d;
    };
    Log.prototype.setTitle = function (t) {
        this.title = t;
    };
    Log.prototype.getTitle = function () {
        return this.title;
    };
    Log.prototype.getDescription = function () {
        return this.description;
    };
    return Log;
}());
var Task = /** @class */ (function () {
    function Task(t, et, ct, comp) {
        this.workers = [];
        this.logs = [];
        this.title = t;
        this.estimate_time = et;
        this.consumed_time = ct;
        this.completed = comp;
    }
    Task.prototype.setTitle = function (t) {
        this.title = t;
    };
    Task.prototype.setEstimateTime = function (et) {
        this.estimate_time = et;
    };
    Task.prototype.setCompleted = function (comp) {
        this.completed = comp;
    };
    Task.prototype.setConsumedTime = function (ct) {
        this.consumed_time = ct;
    };
    Task.prototype.getTitle = function () {
        return this.title;
    };
    Task.prototype.getEstimateTime = function () {
        return this.estimate_time;
    };
    Task.prototype.getConsumedTime = function () {
        return this.consumed_time;
    };
    Task.prototype.getCompleted = function () {
        return this.completed;
    };
    Task.prototype.addWorker = function (w) {
        this.workers.push(w);
    };
    Task.prototype.addLog = function (l) {
        this.logs.push(l);
    };
    return Task;
}());
var Worker_ = /** @class */ (function () {
    function Worker_(n) {
        this.name = n;
    }
    Worker_.prototype.setName = function (n) {
        this.name = n;
    };
    Worker_.prototype.getName = function () {
        return this.name;
    };
    return Worker_;
}());
var App = /** @class */ (function () {
    function App() {
        this.tasks = [];
    }
    App.prototype.addTask = function (t) {
        this.tasks.push(t);
    };
    App.prototype.completedTasks = function () {
        this.tasks.forEach(function (item, i, arr) {
            if (item.completed === true) {
                console.log(item);
            }
        });
    };
    App.prototype.getWorkers = function () {
        var worker = [];
        this.tasks.forEach(function (item, i, arr) {
            item.workers.forEach(function (item_, i_, arr) {
                worker.push(item_);
            });
        });
        return worker;
    };
    App.prototype.getTasks = function () {
        var task = [];
        this.tasks.forEach(function (item, i, arr) {
            task.push(item);
        });
        return task;
    };
    return App;
}());
