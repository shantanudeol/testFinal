import { expect } from 'chai'
import { createMocks } from 'node-mocks-http';
import handleJobData from '../pages/api/jobs';

describe('Testing API with query attributes', () => {
    it('Searching', async () => {
        const { req, res } = createMocks({
            query: {
                search: 'Eastside Medical Center',
            },
        });

        const jobResponse = await handleJobData(req, res);
        const jestData = jobResponse._getData();
        expect(jestData.jobs.length).to.equal(1);
    });
});	