export class Elements{
    elements: Array<Entry>=new Array;
}

export class Entry{
    id: number=-1;
    url?: String='';
    kanji: String='';
    pronounces: Array<String>=new Array;
    translations: Array<String>=new Array;
}

