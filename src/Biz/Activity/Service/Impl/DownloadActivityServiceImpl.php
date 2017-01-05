<?php

namespace Biz\Activity\Service\Impl;

use Biz\Activity\Service\DownloadActivityService;
use Biz\BaseService;
use Codeages\Biz\Framework\Service\Exception\AccessDeniedException;
use Topxia\Common\ArrayToolkit;

class DownloadActivityServiceImpl extends BaseService implements DownloadActivityService
{
    public function createDownloadFileRecord($downloadFile)
    {
        $user = $this->getCurrentUser();
        if (!$user->isLogin()) {
            throw new AccessDeniedException();
        }
        $record = array(
            'downloadActivityId' => $downloadFile['downloadActivityId'],
            'downloadFileId'     => $downloadFile['id'],
            'fileIndicate'       => $downloadFile['indicate'],
            'userId'             => $user->getId()
        );

        return $this->getDownloadFileRecordDao()->create($record);
    }

    public function downloadActivityFile($activityId, $downloadFileId)
    {
        $activity = $this->getActivityService()->getActivity($activityId, $fetchMedia = true);

        $materials = empty($activity['ext']['materials']) ? array() : $activity['ext']['materials'];
        if (empty($materials)) {
            throw $this->createNotFoundException('activity not found');
        }
        $downloadFiles = ArrayToolkit::index($materials, 'id');
        $downloadFile  = $downloadFiles[$downloadFileId];
        if (empty($downloadFile)) {
            throw $this->createNotFoundException('file not found');
        }
        $this->createDownloadFileRecord($downloadFile);

        return $downloadFile;
    }


    /**
     * @return DownloadFileRecordDao
     */
    protected function getDownloadFileRecordDao()
    {
        return $this->createDao('Activity:DownloadFileRecordDao');
    }

    protected function getActivityService()
    {
        return $this->biz->service('Activity:ActivityService');
    }

}
