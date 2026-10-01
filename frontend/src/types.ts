export interface User{
    id:  number;
    username:string
}


export interface Project {
    id: number;
    name: string;
    description?: string| null;

}

export interface Task {
id: number;
title:string
description?: string| null;
status:string
priority?:number |null
assignee?:User |null
}