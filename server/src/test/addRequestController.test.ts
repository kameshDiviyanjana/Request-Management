// import request from 'supertest';
// import { Request, Response, NextFunction } from 'express';
// import server from '../../src/server'; // Adjust path based on your app structure
// import * as service from '../../src/service/requestservice'; // Import your service functions
// import { IRequest } from '../Modul/Request'; // Adjust path based on your app structure

// jest.mock('../../src/service/requestservice'); // Mock the service functions

// describe('Request Controller - addrequst', () => {
//   let testServer: any;

//   beforeAll((done) => {
//     testServer = server.listen(5004, done); // Start server on a specific port for testing
//   });

//   afterAll((done) => {
//     testServer.close(done); // Close the server after all tests are done
//   });

//   it('should add a request successfully', async () => {
//     // Mock data for request body and expected response
//     const mockRequest: IRequest = {
//       requestId: '123',
//       createdOn: new Date('2023-06-20'),
//       location: 'Location A',
//       service: 'Service A',
//       status: 'New',
//       priority: 'Medium',
//       department: 'Department A',
//       requestedBy: 'User A',
//       assignedTo: 'User B',
//     };

//     const mockResponse = { ...mockRequest, _id: '60b5f5f5f5f5f5f5f5f5f5f' };

//     // Mock implementation of the service function
//     (service.addRequestService as jest.Mock).mockResolvedValue(mockResponse);

//     // Make a request to the endpoint using supertest
//     const response = await request(testServer)
//       .post('/kl/request')
//       .send(mockRequest);

//     // Assertions
//     expect(response.status).toBe(200); // Check if status code is 200
//     expect(response.body).toEqual({
//       data: mockResponse,
//       message: 'Add To-do successfully',
//     });

//     // Optional: Verify that the mocked function was called once
//     expect(service.addRequestService).toHaveBeenCalledTimes(1);
//     expect(service.addRequestService).toHaveBeenCalledWith(mockRequest);
//   });

//   // Add more tests for error cases, edge cases, etc.
// });

// import request from 'supertest';
// import server from '../../src/server'; // Adjust path based on your app structure
// import * as service from '../../src/service/requestservice'; // Import your service functions
// import { IRequest } from '../Modul/Request'; // Adjust path based on your app structure

// jest.mock('../../src/service/requestservice'); // Mock the service functions

// describe('Request Controller - addrequst', () => {
//   let testServer: any;

//   beforeAll((done) => {
//     testServer = server.listen(5004, done); // Start server on a specific port for testing
//   });

//   afterAll((done) => {
//     testServer.close(done); // Close the server after all tests are done
//   });
//   const i =new Date('2023-06-20')
//   it('should add a request successfully', async () => {
//     // Mock data for request body and expected response
//     const mockRequest: IRequest = {
//       requestId: '123',
//       createdOn: i, // Use Date object
//       location: 'Location A',
//       service: 'Service A',
//       status: 'New',
//       priority: 'Medium',
//       department: 'Department A',
//       requestedBy: 'User A',
//       assignedTo: 'User B',
//     };

//     const mockResponse = { ...mockRequest, _id: '60b5f5f5f5f5f5f5f5f5f5f' };

//     // Mock implementation of the service function
//     (service.addRequestService as jest.Mock).mockResolvedValue(mockResponse);

//     // Make a request to the endpoint using supertest
//     const response = await request(testServer)
//       .post('/kl/request')
//       .send(mockRequest);

//     // Assertions
//     expect(response.status).toBe(200); // Check if status code is 200
//     expect(response.body).toEqual({
//       data: mockResponse,
//       message: 'Add To-do successfully',
//     });

//     // Optional: Verify that the mocked function was called once
//     expect(service.addRequestService).toHaveBeenCalledTimes(1);
//     expect(service.addRequestService).toHaveBeenCalledWith(mockRequest);
//   });

//   // Add more tests for error cases, edge cases, etc.
// });

