  # 实现一个eventBus,其中订阅只要一次
  
````
class EventBus {
    constuctor() {
        this.events = {};
    }

    // 订阅一次
    subScribeOne(eventName, callback) {
        // 取消
        const oneCallback = (data) => {
            callback(data);
            this.unsubScribe(eventName, oneCallback)
        }
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(oneCallback)
    }

    // 订阅事件
    subScribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    // 发布事件
    publish(eventName, data) {
        const eventCallbacks = this.events[eventName];
        if (eventCallbacks) {
            eventCallbacks.forEach(callback => callback(data));
        }
    }

    // 取消订阅
    unsubScribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
        }
    }


}
<!-- 
const eventBus = new EventBus()


eventBus.subScribe('eat', data => {
    console.log('我要去吃大餐了')
})

eventBus.publish('eat', { username: 'me' })

console.log(eventBus) -->
````