// models/Request.ts

import mongoose, { Document } from 'mongoose';

export interface IRequest extends Document {
    requestId: string;
    createdOn: Date;
    location: string;
    service: string;
    status: 'New' | 'In Progress' | 'Escalated' | 'On Hold';
    priority: 'Low' | 'Medium' | 'High';
    department: string;
    requestedBy: string;
    assignedTo?: string;
}

const requestSchema = new mongoose.Schema({
    requestId: { 
        type: String,
        required: true },
    createdOn:
     { type: Date,
        
        required: true },
    location:
     { type: String,
     required: true },
    service: { 
        type: String,
        required: true 
    },
    status:
     { type: String,
        
        enum: ['New', 'In Progress', 'Escalated', 'On Hold'], 
        default: 'New', required: true
     },
    priority: {
         type: String,
         enum: ['Low', 'Medium', 'High'], 
         default: 'Low',
          required: true
         },
    department: { 
        type: String,
         required: true 
        },
    requestedBy: {
         type: String,
          required: true
         },
    assignedTo: { 
        type: String 
    },
});

const Requests = mongoose.model<IRequest>('Requesttable', requestSchema);

export default Requests;
