import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonHeader, IonTitle } from '@ionic/react';
import React from 'react';

const CourseItem : React.FC<{
    title: string;
    enrollmentDate: Date;
    id: string;
}> = props => {
    return (
        <IonCard>
            <IonHeader>
            <IonTitle>{props.title}</IonTitle>
            <IonCardSubtitle>
                Enrolled on{' '}
                {props.enrollmentDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
                })}</IonCardSubtitle>
            </IonHeader>
            <IonCardContent>


            <div className="ion-text-right">
                <IonButton fill="clear" color="secondary" routerLink={`/courses/${props.id}`}>View Course Goals</IonButton>
            </div>
            </IonCardContent>   
        </IonCard>
    )
}


export default CourseItem; 