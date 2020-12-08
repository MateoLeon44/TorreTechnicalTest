

const helper = () => {
    const matches = {};

    matches.getCompensationJob = (job) => {
        jobMinCompensation = 0
        if (job.compensation &&
            job.compensation.periodicity === 'yearly' &&
            job.compensation.code === 'fixed') {
            jobMinCompensation = job.compensation.minAmount / 12;
        }
        else if (job.compensation &&
            job.compensation.periodicity === 'hourly' &&
            job.compensation.code === 'fixed') {
            jobMinCompensation = job.compensation.minAmount * 160;
        }
        else if (job.compensation &&
            job.compensation.periodicity === 'yearly' &&
            job.compensation.code === 'range') {
            jobMinCompensation = job.compensation.minAmount / 12;
        }
        else if (
            job.compensation &&
            job.compensation.periodicity === 'yearly' &&
            job.compensation.code === 'range'
        ) {
            jobMinCompensation = job.compensation.minAmount * 160;
        }

        return jobMinCompensation;
    }

    matches.compensationMatch = (person, jobMinCompensation, job) => {
        let toReturn = false;
        if (person.opportunities) {
            const personCompensationCurrency = person.opportunities.find(e => e.field === 'desirable-compensation-currency');
            const personCompensationAmount = person.opportunities.find(e => e.field === 'desirable-compensation-amount');
            const personCompensationPeriodicity = person.opportunities.find(e => e.field === 'desirable-compensation-periodicity');
            if (jobMinCompensation === 0) {
                toReturn = true;
            }
            else if (personCompensationCurrency && personCompensationPeriodicity && personCompensationAmount && jobMinCompensation > 0) {
                if (personCompensationCurrency.data === job.compensation.currency &&
                    personCompensationPeriodicity.data === 'yearly') {
                    if (personCompensationAmount.data / 12 >= jobMinCompensation) {
                        toReturn = true;
                    }
                }
                else if (personCompensationCurrency.data === job.compensation.currency &&
                    personCompensationPeriodicity.data === 'monthly') {
                    if (personCompensationAmount.data >= jobMinCompensation) {
                        toReturn = true;
                    }
                }
                else if (personCompensationCurrency.data === job.compensation.currency &&
                    personCompensationPeriodicity.data === 'hourly') {
                    if (personCompensationAmount.data * 160 >= jobMinCompensation) {
                        toReturn = true;
                    }
                }
            }
        }
        return toReturn;
    }

    return matches;
}

module.exports = helper();