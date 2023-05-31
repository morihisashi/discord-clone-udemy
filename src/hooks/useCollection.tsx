import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, DocumentData, Query } from "firebase/firestore";

interface Channels {
    id: string;
    channel: DocumentData;
}

const useCollection = (data: string) => {
    const [documents, setDocuments] = useState<Channels[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db, data));

    useEffect(() => {

        onSnapshot(collectionRef, (querySnapshot) => {
            const channelsResult: Channels[] = [];
            querySnapshot.docs.forEach((doc) => {
                channelsResult.push({
                    id: doc.id,
                    channel: doc.data(),
                });
            });
            setDocuments(channelsResult);
        });
    }, []);
    return { documents };
}

export default useCollection
