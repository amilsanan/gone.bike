import type { APIRoute } from 'astro';

export const get: APIRoute = async ()=>{
    let bikeModelsApi: { key: string, value: string }[] = [{ "key": "key-0", "value": "value-0" }, { "key": "key-1", "value": "value-1" }, { "key": "key-2", "value": "value-2" }, { "key": "key-3", "value": "value-3" }, { "key": "key-4", "value": "value-4" }, { "key": "key-5", "value": "value-5" }, { "key": "key-6", "value": "value-6" }, { "key": "key-7", "value": "value-7" }, { "key": "key-8", "value": "value-8" }, { "key": "key-9", "value": "value-9" }, { "key": "key-10", "value": "value-10" }, { "key": "key-11", "value": "value-11" }, { "key": "key-12", "value": "value-12" }, { "key": "key-13", "value": "value-13" }, { "key": "key-14", "value": "value-14" }, { "key": "key-15", "value": "value-15" }, { "key": "key-16", "value": "value-16" }, { "key": "key-17", "value": "value-17" }, { "key": "key-18", "value": "value-18" }, { "key": "key-19", "value": "value-19" }, { "key": "key-20", "value": "value-20" }, { "key": "key-21", "value": "value-21" }, { "key": "key-22", "value": "value-22" }, { "key": "key-23", "value": "value-23" }, { "key": "key-24", "value": "Value-24" }]
    return {
        body: JSON.stringify({
            data: bikeModelsApi
        })
    }
}