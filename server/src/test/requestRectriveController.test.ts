

import request from 'supertest';
import app from '../../src/index'; 
import * as service from '../service/requestservice'; 
import { makerespon } from '../utile/makerespon'; 

jest.mock('../service/requestservice'); 

describe('Request Controller - rectriveRequestAll', () => {
  let testServer: any;

  beforeAll((done) => {
    const port = 5004;
    testServer = app.listen(port, done); 
  }, 10000); 

  afterAll((done) => {
    testServer.close(done); 
  }, 10000);

  it('should retrieve all requests successfully', async () => {
    
    const mockRequests = [
      { requestId: '1', createdOn: '2023-06-01', location: 'Location A', service: 'Service A', status: 'New', priority: 'Medium', department: 'Department A', requestedBy: 'User A' },
      { requestId: '2', createdOn: '2023-06-02', location: 'Location B', service: 'Service B', status: 'In Progress', priority: 'High', department: 'Department B', requestedBy: 'User B' },
    ];


    (service.AllRequest as jest.Mock).mockResolvedValue(mockRequests);

   
    const response = await request(testServer).get('/kl/request');


    expect(response.status).toBe(200); 
    expect(response.body).toEqual({
      data: mockRequests,
      message: 'all To-do successfully',
    });

    expect(service.AllRequest).toHaveBeenCalledTimes(1);
  });

  
});


