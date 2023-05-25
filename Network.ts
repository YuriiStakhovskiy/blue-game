
import { EXITTYPE, NetworkData, SENDTYPE } from "./NetworkData";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { io, Socket } from "socket.io-client";

/**
 * Event Object
 */
export interface netdata {
    key: string;
    call: Function;
    target: any;
}

/**
 * Communication Management Class
 */
export class Network {

    private static instance: Network;

    private netCfg: NetworkData;

    private connectCall: Function = ()=>{};   //Link successful

    private wsdisconnect: boolean = false;  //Whether to disconnect or not

    private removeTime: number = 10;  //10 seconds without packet return force off loading so players can resend packets

    private removeWsTime: number = 30;

    private sendCount: { [key: number]: number } = {};

    private socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();


    private noWaitView: string[] = [
    ];

    constructor() {
        this.netCfg = NetworkData.getInstance();
        this.onUnsolicited();
    }

    public static getInstance() {
        if (!Network.instance) {
            Network.instance = new Network();
        }

        return Network.instance;
    }

    /**
     * Offer Agreement
     * @param route     Routing Interface routing distinction
     * @param msg       Package contents
     * @param next      Callback
     * @param type      send type
     */
    public sendMsg(route: string, msg: any, next: Function, type: SENDTYPE = SENDTYPE.SOCKET) {
        //构建发包结构
        let msgData = this.msgParsing(route, msg, type);

        switch (type) {
            case SENDTYPE.HTTP:
                this.POST(route, msgData, next);
                break;
            case SENDTYPE.SOCKET:
                this.socketReq(route, msgData, next);
                break;
            default: break
        }
    }

    /**
     * Send post
     * @param route 
     * @param msg 
     * @param next 
     * @param timeout 
     */
    private POST(route: string, msg: any, next?: Function, timeout: number = this.netCfg.getTimeout()) {        
        const configDefault = {
          timeout: timeout,
          headers: {
            Authorization: "Bearer " + this.netCfg.getToken(),
          },
        }
        axios.post(route, msg, configDefault).then(response=> {
            console.log(response);
        })
    }

    /**
     * Send get
     * @param route 
     * @param msg 
     */
    private GET(route: string, msg: any) {
        const configDefault = {
          headers: {
            Authorization: "Bearer " + this.netCfg.getToken(),
          },
        }
        axios.get(route, msg, configDefault).then(response=> {
            console.log(response);
        })
    }



    //send websocket
    public socketReq(route: string, msg: any, callBack?: Function) {
        this.socket.emit(route, msg);
    }

    /**
     * websocket init
     * @param host 
     * @param port 
     * @param connectcb 
     */
    public connect(connectFuc?: Function) {
        io.on("connection", connectFuc(socket) {
            console.log("socket connected:" + socket.id);
        });
    }

    /**
     * pomelo connect 
     * @param event_type
     * @param event
     */
    private connectConnector(event_type: string, event: MessageEvent | CloseEvent | Event | any) {
        switch(event_type) {
            case "emit":
                this.socket.emit(event);
                break;
            case "on":
                this.socket.on(event);
                break;
        }
    };

    /**
     * 服务端主动断开链接
     * @param event 
     */
    private kicked() {

    };

    /**
     * Parsing server-side initiated pushed packages
     */
    private onUnsolicited() {
    }


    /**
     * websocket disconnect
     */
    public disconnect() {
        this.socket.emit("forceDisconnect");
    }



    /**
     * Get the status of the websocket
     * @returns 
     */
    public getState() {
        return ""
    }

    /**
     * Clear all contracting agreements
     * 
     */
    public destroy() {
        this.sendCount = {};
    }

    

    /**
     * Data Collation
     * @param msg 
     * @param type 
     * @param version 
     */
    private msgParsing(route: string, msg: any, type: SENDTYPE) {
        let buffer = null;
        msg = msg || {};
        
        return buffer;
    }

    /**
     * 处理网络延迟
     * @param route 
     * @param blOpen 
     * @param type 
     * @returns 
     */
    public wait(route: string, blOpen: boolean, type: SENDTYPE = SENDTYPE.SOCKET) {
        if (this.noWaitView.findIndex((name: string) => name == route) != -1) return;
        if (this.sendCount[type] == null) this.sendCount[type] = 0;
        blOpen ? this.sendCount[type]++ : this.sendCount[type]--;
        if ((this.sendCount[type] == 0 && !blOpen)
            || (this.sendCount[type] == 1 && blOpen)) {
            // TODO 
        }
    }

    /**
     * 清理网络延迟
     */
    private netWorkClose() {
        this.sendCount = {};
    }

    public allClearNetwork() {
        this.disconnect();
    }
}